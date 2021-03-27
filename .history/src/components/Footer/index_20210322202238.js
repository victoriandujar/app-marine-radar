import React from 'react';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default function FooterMenu() {
  return(
    <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
    </Footer>
  );
}
