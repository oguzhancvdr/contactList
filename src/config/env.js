import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnviromentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnviromentVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnviromentVariables : prodEnviromentVariables;
