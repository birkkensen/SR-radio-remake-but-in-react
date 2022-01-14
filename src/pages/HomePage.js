import { Navbar, SearchForm, Category, HorizontalChannels, VerticalChannels } from "../components";

function HomePage({ channels }) {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Category name="Popular Now" />
      <HorizontalChannels channels={channels} />
      <Category name="New Release" />
      <VerticalChannels channels={channels} />
    </>
  );
}

export default HomePage;
