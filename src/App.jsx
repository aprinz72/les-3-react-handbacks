import './App.css'
import Button from './components/button.jsx';
import Product from './components/product.jsx';
import bag1Image from './assets/bag_1.png'
import bag2Image from './assets/bag_2.png'
import bag3Image from './assets/bag_3.png'
import bag4Image from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'
import Tile from "./components/tiles.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    buttonName="to the collection"
                    log="button collection is clicked"
                />
                <Button
                    buttonName="to the collection"
                    log="button all bags is clicked"
                />
                <Button
                    buttonName="pre-order"
                    log="button pre-order is clicked"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    redlabel="Best seller"
                    bagImage={bag1Image}
                    typeBag="The handy bag"
                    price="€400,-"
                />
                <Product
                    redlabel="Best seller"
                    bagImage={bag2Image}
                    typeBag="The stylish bag"
                    price="€250,-"
                />
                <Product
                    redlabel="New collection"
                    bagImage={bag3Image}
                    typeBag="The simple bag"
                    price="€300,-"
                />
                <Product
                    redlabel="New collection"
                    bagImage={bag4Image}
                    typeBag="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <section>
                    <Tile
                        tileTitle="The Brand"
                        tileText1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam consectetur corporis
                        molestiae molestias mollitia, necessitatibus odio omnis vitae voluptas?"
                        tileText2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores assumenda beatae corporis iure labore maiores modi, saepe tempore veritatis!"
                    />
                </section>
                <section>
                    <Tile
                    tileImage = {brand}
                    />
                </section>
                <section>
                    <Tile
                        tileImage = {ourStory}
                    />
                </section>
                <section>
                    <Tile
                        tileTitle="Our Story"
                    tileText1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur enim quo veritatis
                        vitae. Eveniet explicabo minima pariatur sint. Exercitationem iste nesciunt perspiciatis
                        repudiandae saepe. Accusamus, aliquid asperiores cum, cumque dolor esse fugiat laboriosam
                        numquam recusandae rem tenetur vel? Facilis!"
                    />
                </section>
            </footer>
        </>
    )
}

export default App
