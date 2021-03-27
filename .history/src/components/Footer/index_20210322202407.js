import React from 'react';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default function FooterMenu() {
  return (
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon name="apps" />
        </Button>
      </FooterTab>
    </Footer>
  );
}
