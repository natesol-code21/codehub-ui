pipeline {

  environment {
    registry = "nate-docker-production/codehub-ui"
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
          dockerImage = docker.build "927373803645.dkr.ecr.us-east-1.amazonaws.com/"+ registry + ":$BUILD_NUMBER"
          sh 'echo "Completing image build"'
        }
      }
    }
    stage('Deploy Image') {
        steps{
        script {
          sh 'eval $(aws ecr get-login --no-include-email)'
          //sh '${DOCKER_LOGIN} > result'
          sh 'docker push $registryurl$registry:$BUILD_NUMBER'
          sh 'ls -l'
          sh 'echo "Completing image push"'
        }
      }
      }

    stage('Deploy Service') {
        steps{
        script {
          //sh '$(aws ecr get-login --no-include-email)'
          SERVICE_NAME="codehub-ui-service"
          IMAGE_VERSION="$BUILD_NUMBER"
          TASK_FAMILY="codehub-ui"
          sh 'eval $(aws ecr get-login --no-include-email)'

          //sh 'aws ecs create-service --service-name codehub-ui-service --task-definition codehub-ui --cli-input-json file://codehub-ui.json'
          sh 'aws ecs register-task-definition --cli-input-json file://codehub-ui-taskDefinition.json'
          sh 'ls -l'
          //sh 'aws ec2 authorize-security-group-ingress --group-name my-ecs-sg --protocol tcp --port 1-65535 --source-group my-elb-sg'
          sh 'aws ecs create-service --cluster codehub-cluster --service-name codehub-ui-service --task-definition codehub-ui --cli-input-json file://codehub-ui-service.json'
          //sh 'aws ecs run-task  --cluster codehub-cluster --task-definition codehub-ui --count 1'
          sh 'echo "Completing deploying service"'
        }
      }
      }
      stage('Remove Unused docker image') {
      steps{
        sh 'docker rmi $(docker images -q -f dangling=true)'
        sh 'echo "Successfull!!!!"'
      }
    }
    }
}
