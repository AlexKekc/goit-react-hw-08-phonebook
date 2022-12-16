import { MutatingDots } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSpinner>
      <MutatingDots
        height="100"
        width="100"
        color="#edf11b"
        secondaryColor="#0e6cbe"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderSpinner>
  );
};
