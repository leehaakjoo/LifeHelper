import React, {useEffect} from 'react';
import UserInfo from '../components/user/UserInfo';
import {useSelector, useDispatch} from 'react-redux';
import {getinfo} from '../modules/userInfo';

const UserInfoContainer =() => {

    const { read, readinfo, error, loading, userstatus} = useSelector(({read, readinfo, loading, userstatus}) => ({        
        read: readinfo.read,
        error: readinfo.error,
        loading: loading['userinfo/READINFO'],
        userstatus: userstatus.userstatus,
    }));
    const {_id} = userstatus;
    const dispatch = useDispatch();
    console.log(read);
    useEffect(() => {
            try{
                console.log(_id);
                const result = dispatch(getinfo(_id));
                console.log('result', result);
            } catch(e){
                console.log(e);
            }   
        }, [dispatch, _id]
    );
        return(
        <UserInfo
            read = {read}
            loading = {loading}
            error = {error}
        />
    );
}

export default UserInfoContainer;