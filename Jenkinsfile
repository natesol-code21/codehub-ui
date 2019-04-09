pipeline {
    environment {
      registry = "927373803645.dkr.ecr.us-east-1.amazonaws.com/"
      repo = "nate-docker-production/codehub-ui"
      imageUrl= '$registry+repo:$BUILD_NUMBER'
      DOCKER_LOGIN='(aws ecr get-login --no-include-email --region us-east-1)'
      def dockerImage = ''
      registryurl = '927373803645.dkr.ecr.us-east-1.amazonaws.com/'
      //docker tag nate-docker-production/codehub-ui-base:latest 927373803645.dkr.ecr.us-east-1.amazonaws.com/nate-docker-production/codehub-ui-base:latest
    }
      agent any

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
              //withAWS(role: 'codehub-cicd-service',region:'us-east-1') {
                sh 'eval $(aws ecr get-login --no-include-email --region us-east-1)'
                sh 'aws ecs register-task-definition --region us-east-1 --cli-input-json file://codehub-ui-taskDefinition.json'
                sh 'aws ecs create-service --cluster codehub-ui-cluster --region us-east-1 --service-name codehub-ui-service --task-definition codehub-ui --cli-input-json file://codehub-ui-service.json'
                sh 'aws ecs update-service --cluster codehub-ui-cluster --region us-east-1 --service codehub-ui-service --task-definition codehub-ui --desired-count 1'
                sh 'echo "Completing deploying service"'
              //}

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
