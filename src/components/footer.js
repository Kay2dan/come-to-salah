import React from "react";
// import PropTypes from "prop-types";
import { Footer, Container, Content, Columns, Column } from "bloomer";

const FooterSection = () => (
  <Footer>
    <Container>
      <Content>
        <Columns>
          <Column>
            <p>Made with team effort of:</p>
            <ul>
              <li>Nathif Jama Adam (original text author & researcher)</li>
              <li>Placeholder (graphics & art)</li>
              <li>Placeholder (UI/ UX)</li>
              <li>Khalil Zreid (editor)</li>
              <li>Salman Khan (dev)</li>
            </ul>
          </Column>
        </Columns>
      </Content>
    </Container>
  </Footer>
);

export default FooterSection;
