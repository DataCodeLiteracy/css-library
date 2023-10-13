import { OptionWrap, OptionItem, Button } from './styles/OptionStyles'

const Option = () => {
  return (
    <OptionWrap>
      <h1>2,000</h1>
      <OptionItem>
        <span>평점</span>
        <span>...........</span>
      </OptionItem>
      <OptionItem>
        <div>color</div>
        <div>칼라 이미지</div>
      </OptionItem>
      <OptionItem>
        <div>
          <div>Size</div>
          <div>...</div>
        </div>
      </OptionItem>
      <Button>Add to buy</Button>
    </OptionWrap>
  )
}

export default Option
