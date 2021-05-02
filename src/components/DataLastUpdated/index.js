import React, { useState, useEffect } from 'react';
import fetchFromServer from '../../lib/fetchFromServer';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function DataLastUpdated() {
  const [dataLastUpdated, setDataLastUpdated] = useState(false);
  useEffect(() => {
    (async () => {
      setDataLastUpdated((await fetchFromServer('/get-data-last-updated.php')).lastUpdated);
    })();
  }, []);
  return <>{dataLastUpdated ? `Instagram data updated ${dayjs(dataLastUpdated).fromNow()}` : ''}</>;
}
