import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && (
        <>
          <p>You are a desktop or laptop</p>
          {isTabletOrMobile && (
            <p>You are sized like a tablet or mobile phone though</p>
          )}
        </>
      )}
      {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
    </div>
  );
}
