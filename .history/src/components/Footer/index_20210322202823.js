import React from 'react';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default function FooterMenu({ navigation }) {
  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => navigation.navigate('Animals')}>
          <Icon name="apps" />
          <Text>Home</Text>
        </Button>

        <Button vertical>
          <Icon name="camera" />
          <Text>Animais</Text>
        </Button>

        <Button vertical>
          <Icon name="navigate" />
          <Text>Mapa</Text>
        </Button>

        <Button vertical>
          <Icon name="person" />
          <Text>Ameaçados</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
