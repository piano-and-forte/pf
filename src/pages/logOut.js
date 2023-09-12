
import {signOut, getAuth} from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { displayLogout } from './recoil_state';

import {Navigate} from 'react-router';

function LogOut() {
    signOut(getAuth());
    const showLogout = useSetRecoilState(displayLogout);
    showLogout(false);
    return (
        <Navigate to="/home"/>
    )

}

export default LogOut;