import { Button } from '@chakra-ui/react';

import firebase from '../../config/firebase';

export const Schedule = () => {
  const logout = () => firebase.auth().signOut();

  return (
    <div >
      < Button onClick={logout}>Logout</Button>
    </div>
  )
}
