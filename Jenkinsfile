pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
        HOSTNAME = '127.0.0.1'  // You can change this to your desired hostname
        PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control (e.g., Git)
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure Node.js and npm are installed
                    sh 'node -v'
                    sh 'npm -v'

                    // Install dependencies defined in package.json
                    sh 'npm install'
                }
            }
        }

        stage('Run Script') {
            steps {
                script {
                    // Run your Node.js script
                    sh 'node your-script.js'  // Replace 'your-script.js' with the name of your script file
                }
            }
        }
    }

    post {
        always {
            // Clean up or perform any necessary post-build actions
            echo 'Cleaning up...'
        }
    }
}
