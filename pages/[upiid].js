import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import QRCode from "qrcode";

import { styled } from "@stitches/react";

const generateQR = (text) => {
  try {
    return QRCode.toDataURL(text).then((res) => res.toString());
  } catch (err) {
    console.error(err);
  }
};

export const Heading = styled("div", {
  textAlign: "center",
  color: "#6b6b6b",
  letterSpacing: 0,
  fontSize: "12px",
  fontWeight: 300,
  marginBottom: "40px",
});

const Name = styled("div", {
  textDecoration: "underline",
  textDecorationColor: "#8fce00",
  textUnderlineOffset: "5px",
  fontWeight: "500",
  color: "#000",
  fontSize: "16px",
  letterSpacing: ".1rem",
  marginTop: 10,
  padding: 0,
});

const ListContainer = styled("li", {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "10px",
});

const ListItem = styled("div", {
  fontFamily: "sans-serif",
  padding: "2px 10px 2px 10px",
  border: "2px solid #eee",
  color: "#3A3A3A",
  cursor: "pointer",
  fontSize: "14px",
  borderRadius: "9999px",
  transition: "all 0.3s ease-in",
  "&:hover": {
    border: "2px solid #8fce00",
  },
});

const QRcodeImage = styled("img", {
  margin: 0,
  padding: 0,
  width: "200px",
  height: "200px",
  marginLeft: "auto",
  marginRight: "auto",
});

const PaymentComponent = ({ upiid, pn, amount_list }) => {
  const amountList = amount_list && amount_list.split(",");

  const [value, setValue] = useState(amountList[0]);
  const currency = "INR";

  const [img, setImg] = useState("");

  const [url, setUrl] = useState("");

  useEffect(() => {
    let qrcodelink = `upi://pay?cu=${String(currency)}&pa=${upiid}&am=${String(
      value
    )}&pn=${encodeURIComponent(pn)}`;
    generateQR(qrcodelink).then((res) => setImg(res));
    setUrl(qrcodelink);
  }, [value, upiid, pn]);

  return (
    amount_list && (
      <article className="container">
        <Head>
          <title>
            UPI payment to {pn} at upi id {upiid}
          </title>
        </Head>
        <div className="flex center">
          <main className="flex column max center" style={{ gap: "10px" }}>
            <Heading>
              UPI payment to
              <Name>{pn ? pn : upiid}</Name>
            </Heading>
            <div>
              <div className="flex column">
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    textAlign: "left",
                    marginLeft: "20px",
                    color: "#6B6B6B",
                    marginTop: "20px",
                  }}
                >
                  Enter the Amount
                </div>
                <div className="flex center " style={{ gap: "5px" }}>
                  <label
                    style={{
                      fontSize: "20px",
                      color: "#1F1F1F",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    {"\u20B9"}{" "}
                  </label>
                  <input
                    tabIndex="0"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>

              <ListContainer>
                {amountList &&
                  amountList.map((el) => {
                    return (
                      <ListItem
                        onKeyDown={(e) =>
                          e.key === "Enter" ? setValue(el) : null
                        }
                        tabIndex="0"
                        onClick={() => setValue(el)}
                        key={el}
                      >
                        {"\u20B9"} {el}
                      </ListItem>
                    );
                  })}
              </ListContainer>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
              }}
            >
              <QRcodeImage src={img} alt={upiid} />
              <div
                style={{
                  fontSize: "14px",
                  color: "#6B6B6B",
                  textAlign: "center",
                }}
              >
                {upiid}
              </div>
            </div>

            <style jsx>
              {`
                main {
                  height: 100vh;
                  width: 100vw;
                  display: flex;
                  justify-content: center;
                }
              `}
            </style>
            <p style={{ position: "fixed", bottom: "20px" }}>
              Powered by{" "}
              <a href="https://payviaupi.com" target="_blank" rel="noreferrer">
                payviaupi.com
              </a>
            </p>
          </main>
        </div>
      </article>
    )
  );
};

function UPIID() {
  const { query } = useRouter();

  const { upiid, pn, amount_list } = query;

  return (
    amount_list && (
      <PaymentComponent upiid={upiid} pn={pn} amount_list={amount_list} />
    )
  );
}

export default UPIID;
