# Git Commands

git init - Create a new git repo
git status - View changes to your project code
git add - Add files to staging area
git commit - Create a new commit with files from staging area
git log - View recent commits

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}