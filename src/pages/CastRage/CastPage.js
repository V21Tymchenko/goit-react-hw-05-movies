import { useState, useEffect } from 'react';
import { movieCast } from 'helpers/filmApi';
import { useParams } from 'react-router-dom';
import { Casts } from 'components/Casts/Casts';
function CostPage() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const resultCast = await movieCast(movieId);

        setCast(resultCast.cast);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      <Casts cast={cast} loading={loading} />
    </>
  );
}
export default CostPage;
