import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { 
    Container,
    Scroller,
    LoadingIcon,
    ListArea,
    EmptyWarning
} from './styles';

import AppointmentsItem from '../../components/AppointmentsItem';
import Api from '../../Api';

export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(()=>{
        getAppointments();
    }, []);

    const getAppointments = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getAppointments();
        if(res.error == '') {
            setList(res.list);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    return (
        <Container>

            <Scroller refreshControl={
                <RefreshControl refreshing={loading} onRefresh={getAppointments} />
            }>

                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há agendamentos.</EmptyWarning>
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <AppointmentsItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>

        </Container>
    );
}