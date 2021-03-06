import axios from 'axios';
import getUserID from '../lib/getUserID';

export const SET_FILE = 'SET_FILE';

export const GET_PHOTOS = 'GET_PHOTOS';

export const GET_S3_URL = 'GET_S3_URL';
export const GET_S3_URL_REQUEST = 'GET_S3_URL_REQUEST';
export const GET_S3_URL_SUCCESS = 'GET_S3_URL_SUCCESS';
export const GET_S3_URL_FAILURE = 'GET_S3_URL_FAILURE';

export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
export const UPLOAD_PHOTO_REQUEST = 'UPLOAD_PHOTO_REQUEST';
export const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';
export const UPLOAD_PHOTO_FAILURE = 'UPLOAD_PHOTO_FAILURE';

export const SAVE_PHOTO_URL = 'SAVE_PHOTO_URL';
export const SAVE_PHOTO_URL_REQUEST = 'SAVE_PHOTO_URL_REQUEST';
export const SAVE_PHOTO_URL_SUCCESS = 'SAVE_PHOTO_URL_SUCCESS';
export const SAVE_PHOTO_URL_FAILURE = 'SAVE_PHOTO_URL_FAILURE';

export const SELECT_PHOTO = 'SELECT_PHOTO';

export const GET_DELETED_PHOTOS = 'GET_DELETED_PHOTOS';

export const DELETE_PHOTO = 'DELETE_PHOTO';
export const DELETE_PHOTO_REQUEST = 'DELETE_PHOTO_REQUEST';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';

export const SHARE_PHOTO = 'SHARE_PHOTO';
export const SHARE_PHOTO_REQUEST = 'SHARE_PHOTO_REQUEST';
export const SHARE_PHOTO_SUCCESS = 'SHARE_PHOTO_SUCCESS';
export const SHARE_PHOTO_FAILURE = 'SHARE_PHOTO_FAILURE';


/********
* SET PHOTO ACTION
********/

export function setFile (file) {
  return {
    type: SET_FILE,
    data: file
  };
}


/********
* GET PHOTOS ACTION
********/

export function getPhotos (photos) {
  return {
    type: GET_PHOTOS,
    data: photos
  };
}


/********
* GET S3 SIGNED URL ACTIONS
********/


export function getS3URL (filename, filetype, eventID) {
  return (dispatch) => {
    dispatch(getS3URLRequest());

    axios.get(`/get-s3-url?filename=${filename}&filetype=${filetype}&eventID=${eventID}`)
      .then((response) => {
        dispatch(getS3URLSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getS3URLFailure(error));
      });
  };
}

export function getS3URLRequest () {
  return {
    type: GET_S3_URL_REQUEST,
    isFetching: true
  };
}

export function getS3URLSuccess (url) {
  return {
    type: GET_S3_URL_SUCCESS,
    isFetching: false,
    signedURL: url
  };
}

export function getS3URLFailure (error) {
  return {
    type: GET_S3_URL_FAILURE,
    isFetching: false,
    error
  };
}


/********
UPLOAD PHOTO ACTIONS
********/

export function uploadPhoto (url, photo) {
  return (dispatch) => {
    dispatch(uploadPhotoRequest());

    const config = {
      headers: {
        'x-amz-acl': 'public-read-write',
        'Content-Type': photo.type
      }
    };
    axios.put(url, photo, config)

      .then((response) => {
        const photoURL = response.config.url.match(/\S+(?=\?)/)[0];
        dispatch(uploadPhotoSuccess(photoURL));
      })
      .catch((error) => {
        dispatch(uploadPhotoFailure(error));
      });
  };
}

export function uploadPhotoRequest () {
  return {
    type: UPLOAD_PHOTO_REQUEST,
    isFetching: true
  };
}

export function uploadPhotoSuccess (data) {
  return {
    type: UPLOAD_PHOTO_SUCCESS,
    isFetching: false,
    data
  };
}

export function uploadPhotoFailure (error) {
  return {
    type: UPLOAD_PHOTO_FAILURE,
    isFetching: false,
    error
  };
}


/********
* SAVE PHOTO URL ACTIONS
********/

export function savePhotoURL (url, eventID) {
  return (dispatch) => {
    dispatch(savePhotoURLRequest());

    const payload = {
      photoURL: url,
      userID: getUserID(),
      eventID
    };

    axios.post('/save-photo', payload)

      .then((response) => {
        dispatch(savePhotoURLSuccess(response.data));
        dispatch(getPhotos(response.data));
        // ALSO NEED TO DISPATCH THE PHOTOS FROM BACKEND TO HERE.
      })
      .catch((error) => {
        dispatch(savePhotoURLFailure(error));
      });
  };
}

export function savePhotoURLRequest () {
  return {
    type: SAVE_PHOTO_URL_REQUEST,
    isFetching: true
  };
}

export function savePhotoURLSuccess () {
  return {
    type: SAVE_PHOTO_URL_SUCCESS,
    isFetching: false
  };
}

export function savePhotoURLFailure (error) {
  return {
    type: SAVE_PHOTO_URL_FAILURE,
    isFetching: false,
    error
  };
}

/********
* SELECT PHOTO ACTION
********/

export function selectPhoto (url) {
  return {
    type: SELECT_PHOTO,
    url
  };
}

/********
* GET DELETED PHOTOS ACTION
********/

export function getDeletedPhotos (photos) {
  return {
    type: GET_DELETED_PHOTOS,
    data: photos
  };
}


/********
* DELETE PHOTO ACTION
********/

export function deletePhoto (photo, eventID) {
  return (dispatch) => {
    dispatch(deletePhotoRequest());
    const payload = {
      photo,
      eventID,
      userID: getUserID()
    };
    axios.post('/delete-photo', payload)
    .then((response) => {
      dispatch(deletePhotoSuccess());
      dispatch(getDeletedPhotos(response.data));
    })
    .catch((error) => {
      dispatch(deletePhotoFailure(error));
    });
  };
}

export function deletePhotoRequest () {
  return {
    type: DELETE_PHOTO_REQUEST,
    isFetching: true
  };
}

export function deletePhotoSuccess () {
  return {
    type: DELETE_PHOTO_SUCCESS,
    isFetching: false
  };
}

export function deletePhotoFailure (error) {
  return {
    type: DELETE_PHOTO_FAILURE,
    isFetching: false,
    error
  };
}

/********
* SHARE PHOTO ACTION
********/

export function sharePhoto (photoURL) {
  return (dispatch) => {
    dispatch(sharePhotoRequest());
    const payload = {
      photoURL,
      userID: getUserID()
    };

    axios.post('/share-photo', payload)
    .then(() => {
      dispatch(sharePhotoSuccess());
    })
    .catch((error) => {
      dispatch(sharePhotoFailure(error));
    });
  };
}

export function sharePhotoRequest () {
  return {
    type: SHARE_PHOTO_REQUEST,
    isFetching: true
  };
}

export function sharePhotoSuccess () {
  return {
    type: SHARE_PHOTO_SUCCESS,
    isFetching: false
  };
}

export function sharePhotoFailure (error) {
  return {
    type: SHARE_PHOTO_FAILURE,
    isFetching: false,
    error
  };
}
