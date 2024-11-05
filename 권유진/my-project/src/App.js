import Goods from './components/Goods'
import Menu from './components/HeadMenu'
import Counter from './components/likeMark';
import { dummy } from './goodsDummy';
import { menu } from './menuList'
<link rel="stylesheet" href="./src/index.css"></link>

function App() {
  return (
    <div>
      <div className="app-header">
        <img src="https://rlyfaazj0.toastcdn.net/20230920/121505.996013000/Logo_PC.png" alt="로고이미지"></img>
        {
          menu.results.map((item) => {
            return (
              <Menu
                menu_name={item.menu_name}
                link={item.link}
              />
            )
          })
        }
      </div>
      <div className="app-container">
        {dummy.results.map((item, index) => {
          return (
            <div key={index} className="goods-item">
              <Goods
                name={item.name}
                img_path={item.img_path}
                price={item.price}
              />
              <Counter
                likeCount={item.likeCount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
