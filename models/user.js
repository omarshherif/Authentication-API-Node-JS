  class User {
      constructor(id, firstName, lastName, gender, phoneNumber, language, email, avatarUrl) {
          this.id = id;
          this.firstName = firstName;
          this.lastName = lastName;
          this.gender = gender;
          this.phoneNumber = phoneNumber;
          this.language = language;
          this.email = email;
          this.avatarUrl = avatarUrl;

      }
  }

  module.exports = User;