import React from 'react';
import { Text, View } from 'react-native';
import {
  CardDigital,
  Wrap,
  CardFeature,
  ListSchedule,
} from '../../../components/molecules';
import {
  icon_public_service,
  icon_lab,
  icon_special_service,
  icon_konsultasi,
  LogoYuPeriksa,
} from '../../../assets';

const Home = () => {
  return (
    <View>
      <Wrap fullwidth={false} heading={'Kartu Digital'}>
        <CardDigital
          number={'2345 3344 5437 7789'}
          fullname={'Hiban Ramdhani'}
          date={'1 September 2022'}
        />
      </Wrap>
      <Wrap fullwidth={false} heading={'Layanan'}>
        <CardFeature
          number={'2345 3344 5437 7789'}
          fullname={'Hiban Ramdhani'}
          date={'1 September 2022'}
        />
      </Wrap>
      <Wrap fullwidth={false} heading={'Jadwal Anda'}>
        <ListSchedule
          icon={LogoYuPeriksa}
          title={'Klinik Karang Mulya Kalimantan'}
          datetime={'01 Sept 2022 19:30'}
        />
        <ListSchedule
          icon={LogoYuPeriksa}
          title={'Klinik Sindang Kasih'}
          datetime={'01 Sept 2022 09:30'}
        />
        <ListSchedule
          icon={LogoYuPeriksa}
          title={'Klinik Sindang Kasih'}
          datetime={'01 Sept 2022 09:30'}
        />
      </Wrap>
    </View>
  );
};

export default Home;
