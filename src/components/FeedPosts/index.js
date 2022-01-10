import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_PHOTOS } from '../../services/api';

import FeedPostItem from '../FeedPostItem';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import styles from './FeedPosts.module.css';

export default function FeedPosts() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);

      console.log(json)
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />
  if (loading) return <Loading />

  if (data) return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => <FeedPostItem key={photo.id} photo={photo} />)}
    </ul>
  )
  else return null;
}