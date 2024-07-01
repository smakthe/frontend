import React, { useState } from 'react';
import RecordForm from '../components/RecordForm';
import RecordList from '../components/RecordList';

const HomePage = () => {
    const [refresh, setRefresh] = useState(false);

    const handleRecordAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <RecordForm onRecordAdded={handleRecordAdded} />
            <RecordList refresh={refresh} />
        </div>
    );
};

export default HomePage;
