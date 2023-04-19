import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    result = { photo, user };
  } catch (error) {
    result = { photo: null, user: null };
  }
  return result;
}
