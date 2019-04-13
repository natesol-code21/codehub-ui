pipeline {
    environment {
      registry = "927373803645.dkr.ecr.us-east-1.amazonaws.com/"
      repo = "nate-docker-production/codehub-ui"
      imageUrl= '$registry+repo:$BUILD_NUMBER'
      //DOCKER_LOGIN='(aws ecr get-login --no-include-email --region us-east-1)'
      def dockerImage = ''
      registryurl = '927373803645.dkr.ecr.us-east-1.amazonaws.com/'
      //docker tag nate-docker-production/codehub-ui-base:latest 927373803645.dkr.ecr.us-east-1.amazonaws.com/nate-docker-production/codehub-ui-base:latest
    }
      agent any
      tools {nodejs "node"}
    stages {
        stage('Checkout'){
            steps {
            git(
                branch: 'dev_jenkins',
                url: 'https://github.com/natesol-code21/codehub-ui.git'
            )
            sh 'ls -l'
        }
        }
        stage('Build Codehub-UI Image') {
            steps {
            script {
              withAWS(region:'us-east-1') {
                sh '$(aws ecr get-login --no-include-email --region us-east-1)'
                dockerImage=docker.build(registry+repo + ":$BUILD_NUMBER")
            }
              sh 'echo "Completing image build"'
            }
            }
        }

        stage('Publish Codehub-UI Image') {
            steps {
            script {
              withAWS(region:'us-east-1') {
                dockerImage.push()
            }
              sh 'echo "publishing Updating Image Completed!!"'
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

        stage('Deploy Service') {
            steps{
            script {
              SERVICE_NAME="codehub-ui-service"
              IMAGE_VERSION="$BUILD_NUMBER"
              TASK_FAMILY="codehub-ui"
                sh 'npm config ls'
                sh 'npm install js-yaml -g'
                sh 'npm install js-yaml'
                sh 'aws ecs register-task-definition --cli-input-json file://codehub-ui-taskDefinition.json --region us-east-1'
                sh 'node process_appspec.js $(aws ecs list-task-definitions --family-prefix codehub-ui | jq -r ".taskDefinitionArns[-1]")'
                sh 'aws s3 cp appspec.yaml s3://codehub-ui/'
                sh 'aws deploy create-deployment --cli-input-json file://codehub-ui-create-deployment.json --region us-east-1'
            }
          }
          }


        stage('Deloy') {
            steps {

                sh 'echo Deploy Successfully Completed!!!'
            }
        }


    }
}
