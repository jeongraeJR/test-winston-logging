pipeline {
  agent any
    
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/jeongraeJR/test.git'
            }
        }
        stage('npm install') {
            steps {
                sh "npm install"
            }
        }   

         stage('npm start') {
            steps {
                sh "npm start"
            }
        }  
    }
}
