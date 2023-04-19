import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let resolve = {};
  
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    resolve = { photo, user };
  } catch (error) {
    resolve = { photo: null, user: null };
  }
  return resolve;
}
