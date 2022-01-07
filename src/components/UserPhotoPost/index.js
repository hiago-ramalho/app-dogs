import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../services/api';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import Input from '../Input';
import Button from '../Button';
import Error from '../Helper/Error';


import styles from './UserPhotoPost.module.css';

export default function UserPhotoPost() {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');

  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    //para fazer o envio, tem q ser como FormData
    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange(event) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`} >
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="nome"
          {...name}
        />
        <Input
          label="Peso"
          type="number"
          name="peso"
          {...weight}
        />
        <Input
          label="Idade"
          type="number"
          name="idade"
          {...age}
        />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? <Button disabled >Enviando...</Button> : <Button>Enviar</Button>}

        <Error error={error} />
      </form>

      <div>
        {img.preview &&
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          >
          </div>
        }
      </div>
    </section>
  )
}