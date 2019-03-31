pipeline {

  environment {
    registry = "nate-docker-production/codehub-ui"
    registryBase = "nate-docker-production/codehub-ui-base"
    registryCredential = 'aws ecr get-login --no-include-email'
    DOCKER_LOGIN='aws ecr get-login --no-include-email'

    def dockerImage = ''
    registryurl = '927373803645.dkr.ecr.us-east-1.amazonaws.com/'

  }
  //sh 'env'
    agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/natesol-code21/codehub-ui.git'
        sh 'ls -l'
      }
    }
    stage('Building image') {
      steps{

        script {
          sh 'echo $JSPM_GITHUB_AUTH_TOKEN'
          sh 'eval $(aws ecr get-login --no-include-email)'
          dockerBaseImage = docker.build "927373803645.dkr.ecr.us-east-1.amazonaws.com/"+ registryBase + ":$BUILD_NUMBER"
          sh 'docker push $registryurl$registryBase:$BUILD_NUMBER'
          #dockerImage = docker.build "927373803645.dkr.ecr.us-east-1.amazonaws.com/"+ registry + ":$BUILD_NUMBER"
          sh 'echo "Completing image build"'
        }
      }
    }

      stage('Remove Unused docker image') {
      steps{
        sh 'docker rmi $(docker images -q -f dangling=true)'
        sh 'docker rm $(docker ps -a -q)'
        sh 'echo "Successfull!!!!"'
      }
    }
    }
}
