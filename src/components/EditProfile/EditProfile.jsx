import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const useStyles = makeStyles({
  inputStyle: {
    width: '300px',
    height: '300px'
  }
});
const EditProfile = () => {
  const classes = useStyles();
  const [fileInput, setFileInput] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const handleFileChange = e => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = e => {
    e.preventDefault();

    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async base64EncodedImage => {
    try {
      let token = localStorage.getItem('auth-token');
      const res = await Axios.post(
        'http://127.0.0.1:9000/api/v1/users/upload',
        JSON.stringify({ photo: base64EncodedImage }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      const { imageUrl } = res.data;
      Axios.patch(
        'http://127.0.0.1:9000/api/v1/users/updateUser',
        {
          file: imageUrl
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="editProfile">
      <TextField
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="primary"
      />
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="avatart"
          onChange={handleFileChange}
          value={fileInput}
          className="editProfile__upload"
        />
        <button type="submit">submit</button>
      </form>
      {previewSource && (
        <Avatar className={classes.inputStyle} src={previewSource} />
      )}
    </div>
  );
};

export default EditProfile;
