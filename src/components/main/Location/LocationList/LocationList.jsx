import {
  ListContainer,
  ListWrap,
  List,
  ListImageWrap,
  ListImage,
  ListName,
  ListButton,
} from "./LocationListStyles";
import Button from "../../../global/button/Button";

const LocationList = ({ data }) => {
  return (
    <>
      <ListContainer>
        <ListWrap>
          {data.map((list, index) => {
            return (
              <List key={index}>
                <ListImageWrap>
                  <ListImage src={list.image} alt={list.country} />
                </ListImageWrap>
                <ListName>{list?.state}</ListName>
                <ListButton>
                  <Button link={list.anchorLink} label={list.label}>
                    see location
                  </Button>
                </ListButton>
              </List>
            );
          })}
        </ListWrap>
      </ListContainer>
    </>
  );
};

export default LocationList;
