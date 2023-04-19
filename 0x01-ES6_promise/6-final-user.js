import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
    .then((res) => (
      res.map((outs) => ({
        status: outs.status,
        value: outs.status === 'fulfilled' ? outs.value : String(outs.reason),
      }))
    ));
  /* .catch(() => {
      return [{ status: 'rejected', value: 'Signup system offline' }];
    }); */
}
