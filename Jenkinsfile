pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                dir('app') { // Change 'app' to the correct directory
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                dir('app') { // Change 'app' to the correct directory
                    sh 'npm test'
                }
            }
        }
        
        stage('Run Application') {
            steps {
                dir('app') { // Change 'app' to the correct directory
                    sh 'node app.js'
                }
            }
        }
    }
}
