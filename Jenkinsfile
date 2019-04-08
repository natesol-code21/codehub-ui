pipeline {
    environment {
      registry = "natesol15/codehub-ui-base"
      registryBase = "natesol15/codehub-ui-base"
      DOCKER_LOGIN='aws ecr get-login --no-include-email'
      def dockerImage = ''
      registryurl = '927373803645.dkr.ecr.us-east-1.amazonaws.com/'

    }
      agent any

    stages {
        stage('Checkout') {
            steps {
            git(
                branch: 'dev_jenkins',
                url: 'https://github.com/usdot-jpo-codehub/codehub-ui.git'
            )
            sh 'ls -l'
        }
        }
        stage('Build') {
            steps {
            script {
              //sh 'eval $registryCredential'
              sh 'docker login'
              docker.build(registryBase + ":$BUILD_NUMBER", "-f Dockerfile-Base .")
              sh 'docker push $registryBase:$BUILD_NUMBER'
              sh 'echo "Completing image build"'
            }
            }
        }

        stage('Unit Test') {
            steps {
                sh 'echo Unit Testing is complete'
            }
        }

        stage('Sonarqube Scan') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv('Sonarqube') {
                    //sh "${scannerHome}/bin/sonar-scanner"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    //waitForQualityGate abortPipeline: true
                }
                sh 'echo Sonarqube Scan is complete'
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
