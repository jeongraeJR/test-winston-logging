pipeline {
  agent any
    
    stages {
        stage('make zip file') {
            steps {
                sh "zip -r ./deploy.zip ."
            }
        }   
    }
}
