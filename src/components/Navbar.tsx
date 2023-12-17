import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
// import { ConnectWallet } from "@thirdweb-dev/react";
import AppProvider, { useAppContext } from "../providers/AppProvider";
import React from "react";

const Navbar = () => {
  const {handleConnetWalletBtnClick,address}=useAppContext()
  return (
    <div>
      <AppBar
        sx={{
          background:
            " var(--gradient-1, linear-gradient(90deg, #000080 0%, #000080 100%))",
        }}
      >
        <Toolbar>
          <Container>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>KIBOKO</Typography>
              {/* <ConnectWallet
                welcomeScreen={{
                  title: "Connect Your wallet to Offramp",
                  subtitle: "KibokoDao Group of Projects",
                  img: {
                    src: "/kiboko.png",
                  },
                }}
              /> */}
     <button onClick={handleConnetWalletBtnClick}>
      {address?address?.substring(0,6):'Connect Wallet'}
       </button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
