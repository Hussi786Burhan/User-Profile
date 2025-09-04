import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    const { username, email } = this.props;

    return (
      <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
        <h2>User Profile</h2>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  }
}

export default UserProfile;
