import React, { useState, useEffect } from "react";
import axios from 'axios';

const SetLatLong = (props) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const RoadAddr = props.RoadAddr;
    const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setUsers(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
        //   axios.defaults.headers.get['header1'] = "";
          const response = await axios.get(
            "https://dapi.kakao.com/v2/local/search/address.json?analyze_type=exact&page=2&size=10&query="+String(RoadAddr),{
            headers: {
                'Authorization': "KakaoAK b4b6ab56893dc911f31bd7af9e63545f"
            },}
          );
          setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    
    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;
    
    if (!users) return null;

    props.setLat(users.documents[0].x)
    props.setLong(users.documents[0].y);
}

export default SetLatLong;