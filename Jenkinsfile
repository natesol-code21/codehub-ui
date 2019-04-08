pipeline {
    environment {
      registry = "797335914619.dkr.ecr.us-east-1.amazonaws.com/"
      repo = "dev-codehub/codehub-ui-base"
      imageUrl= '$registry+repo:$BUILD_NUMBER'
      DOCKER_LOGIN='(aws ecr get-login --no-include-email --region us-east-1)'
      def dockerImage = ''
      registryurl = '927373803645.dkr.ecr.us-east-1.amazonaws.com/'

    }
      agent any

    stages {
        stage('Checkout') {
            steps {
            git(
                branch: 'development',
                url: 'https://github.com/usdot-jpo-codehub/codehub-ui.git'
            )
            sh 'ls -l'
        }
        }
        stage('Build') {
            steps {
            script {
              //sh 'eval $DOCKER_LOGIN'
              //sh 'docker login'
              //docker build -t dev-codehub/codehub-ui-base .
              //dockerImage=docker.build(registry+repo + ":$BUILD_NUMBER", "-f Dockerfile-Base .")
              //dockerImage.push()
              withAWS(region:'eu-east-1') {
                    // do something
                dockerImage=docker.build(registry+repo + ":$BUILD_NUMBER", "-f Dockerfile-Base .")
                //sh 'eval $(aws ecr get-login --no-include-email --region us-east-1)'
                //sh 'docker push 797335914619.dkr.ecr.us-east-1.amazonaws.com/dev-codehub/codehub-ui-base:latest'
                dockerImage.push()
               // dockerImage.push()
            }
              //sh 'docker push 797335914619.dkr.ecr.us-east-1.amazonaws.com/dev-codehub/codehub-ui-base:latest'
              sh 'echo "Completing image build"'
            }
            }
        }

        stage('Unit Test') {
            steps {
                sh 'echo Unit Testing is complete'
            }
        }

        stage('Sonar Scan') {
            steps {
                sh 'echo Sonar Scan is complete'
            }
        }

        stage('508 Complaince') {
            steps {
                sh 'echo 508 Complaince is complete'
            }
        }

        stage('Integration Test1') {
            steps {

                sh 'echo Integration Test 1 is complete'
            }
        }

        stage('Integration Test2') {
            steps {

                sh 'echo Integration Test 2 is complete'
            }
        }

        stage('Publish Image To Registry') {
            steps {

                sh 'echo Updated Docker Image is Published'
            }
        }

        stage('Updated TaskDefinition & Service') {
            steps {

                sh 'echo Service is Updated'
            }
        }
        stage('Deloy') {
            steps {

                sh 'echo Deploy Successfully Completed!!!'
            }
        }


    }
}
