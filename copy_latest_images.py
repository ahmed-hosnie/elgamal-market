import os
import shutil

src_dir = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\.user_uploaded'
dest_dir = r'c:\Users\HP\Desktop\elgamal market\images'

mapping = [
    # 1-3: Farm Frites
    ("media_1786696503399.png", "farm-frites-pommes-frites-1kg.png"),
    ("media_1786696507832.png", "farm-frites-pommes-frites-2.5kg.png"),
    ("media_1786696527593.png", "farm-frites-thin-fries-1kg.png"),
    
    # 4-10: Atyab
    ("media_1786696531054.png", "atyab-chicken-strips-spicy-1kg.png"),
    ("media_1786696536312.png", "atyab-chicken-strips-normal-1kg.png"),
    ("media_1786696539874.png", "atyab-chicken-strips-400g.png"),
    ("media_1786696543411.png", "atyab-chicken-pane-20pcs.png"),
    ("media_1786696551599.png", "atyab-chicken-burger-pane-6pcs.png"),
    ("media_1786696555456.png", "atyab-chicken-nuggets-20pcs.png"),
    ("media_1786696560493.png", "atyab-oriental-sausages.png"),
    
    # 11-18: Koki
    ("media_1786696568990.png", "koki-chicken-strips-1kg.png"),
    ("media_1786696579118.png", "koki-beef-burger-20pcs.png"),
    ("media_1786696586675.png", "koki-nuggets-fries-60pcs.png"),
    ("media_1786696594409.png", "koki-chicken-burger-8pcs.png"),
    ("media_1786696599929.png", "koki-chicken-pane-spicy-20pcs.png"),
    ("media_1786696604726.png", "koki-beef-hotdog-12pcs.png"),
    ("media_1786696609966.png", "koki-gold-beef-burger-6pcs.png"),
    ("media_1786696633324.png", "koki-crunchy-chicken-drumsticks.png"),
    
    # 19-26: Halwani Bros
    ("media_1786696640878.png", "halwani-jumbo-beef-burger-1kg.png"),
    ("media_1786696645139.png", "halwani-crunchy-strips-1kg.png"),
    ("media_1786696648522.png", "halwani-crunchy-strips-spicy-1kg.png"),
    ("media_1786696651276.png", "halwani-crunchy-strips-400g.png"),
    ("media_1786696662405.png", "halwani-beef-burger-8pcs.png"),
    ("media_1786696669043.png", "halwani-beef-burger-16pcs-1kg.png"),
    ("media_1786696672427.png", "halwani-oriental-sausage-700g.png"),
    ("media_1786696678385.png", "halwani-cocktail-sausage-350g.png"),
    
    # 27-30: Chiquita, Dayem, El Tawabel
    ("media_1786696683073.png", "chiquita-beef-burger-1kg.png"),
    ("media_1786696729006.png", "chiquita-beef-hotdog-25pcs.png"),
    ("media_1786696756384.png", "dayem-oriental-sausage-700g.png"),
    ("media_1786696770515.png", "eltawabel-beef-burger-30pcs.png"),
    
    # 31-36: Frozen Vegetables (Basma, Givrex)
    ("media_1786696776796.png", "basma-frozen-molokhia-400g.png"),
    ("media_1786696795048.png", "basma-mixed-vegetables-400g.png"),
    ("media_1786696801699.png", "basma-okra-zero-400g.png"),
    ("media_1786696809844.png", "basma-peas-400g.png"),
    ("media_1786696818542.png", "basma-spinach-cut-400g.png"),
    ("media_1786696830586.png", "givrex-frozen-molokhia-400g.png"),
    
    # 37-41: Oils, Ghee, Tuna, Foul
    ("media_1786696872428.png", "rawaby-ghee-qishta-700g.png"),
    ("media_1786696876316.png", "crystal-ghee-butter-700g.png"),
    ("media_1786696886636.png", "crystal-corn-oil-800ml.png"),
    ("media_1786696896530.png", "harvest-foul-medames-3pack.png"),
    ("media_1786696902967.png", "dolphin-shredded-tuna-can.png"),
    
    # 42-46: Knorr Mixes & Stocks
    ("media_1786696936477.png", "knorr-vegetar-normal.png"),
    ("media_1786696945691.png", "knorr-tomato-puree-pouch.png"),
    ("media_1786696948699.png", "knorr-veg-stock-12cubes.png"),
    ("media_1786696955687.png", "knorr-syrian-shawerma-mix.png"),
    ("media_1786696959502.png", "knorr-bechamel-mix.png"),
    
    # 47-49: Pasta
    ("media_1786696962991.png", "regina-lisan-asfour-400g.png"),
    ("media_1786696968648.png", "elmaleka-vermicelli-400g.png"),
    ("media_1786696971674.png", "elmaleka-small-rings-1kg.png"),
    
    # 50-53: Heinz Mayo, Jam, Honey, Halawa
    ("media_1786696981244.png", "heinz-mayo-pouch.png"),
    ("media_1786696991647.png", "vitrac-strawberry-jam-430g.png"),
    ("media_1786696995538.png", "imtenan-spring-honey-1100g.png"),
    ("media_1786696999450.png", "elbawadi-halawa-500g.png"),
    
    # 54-57: Dreem & Sweetal
    ("media_1786697002391.png", "dreem-orange-vanilla.png"),
    ("media_1786697011383.png", "dreem-cake-chef-24pack.png"),
    ("media_1786697016890.png", "sweetal-sweetener-tub.png"),
    ("media_1786697022947.png", "sweetal-stevia-100sticks.png"),
    
    # 58-65: Snacks, Chocolates, Gums
    ("media_1786697027767.png", "clorets-mint-gum.png"),
    ("media_1786697033614.png", "clorets-cinnamint-gum.png"),
    ("media_1786697038948.png", "chiclets-strawberry-gum-10pcs.png"),
    ("media_1786697042384.png", "tuc-salted-crackers-pack.png"),
    ("media_1786697046484.png", "chipsy-cheese-10le.png"),
    ("media_1786697052424.png", "lion-chips-salt-red-7le.png"),
    ("media_1786697055375.png", "galaxy-flutes-chocolate.png"),
    ("media_1786697062981.png", "cocoa-lovers-sandwich-biscuit.png"),
    
    # 66-73: Sweetal, El Maleka, Knorr, Gannah, Heinz Mustard, Knorr 11 Spice
    ("media_1786697067602.png", "sweetal-stevia-tub.png"),
    ("media_1786697070512.png", "sweetal-stevia-50sachets.png"),
    ("media_1786697074940.png", "sweetal-50tablets.png"),
    ("media_1786697079515.png", "elmaleka-elbow-pasta-1kg.png"),
    ("media_1786697092466.png", "knorr-hot-vegetar.png"),
    ("media_1786697098785.png", "gannah-ghee-butter-2.5kg.png"),
    ("media_1786697102578.png", "heinz-mustard-bottle.png"),
    ("media_1786697166813.png", "knorr-11-spice-mix.png"),
    
    # 74-82: Dreem Dark Choc, Regina Penne, Trident, Molto XXL, Chiclets, Imtenan Clover, Dreem Creme Caramel
    ("media_1786697251918.png", "dreem-dark-cooking-chocolate-200g.png"),
    ("media_1786697267743.png", "regina-penne-pasta-400g.png"),
    ("media_1786697281468.png", "trident-watermelon-gum-7pcs.png"),
    ("media_1786697284927.png", "molto-xxl-chocolate-hazelnut.png"),
    ("media_1786697286467.png", "chiclets-green-mint-gum-10pcs.png"),
    ("media_1786697302821.png", "trident-spearmint-gum-7pcs.png"),
    ("media_1786697343224.png", "trident-watermelon-sugarfree.png"),
    ("media_1786697349980.png", "imtenan-clover-honey-1kg.png"),
    ("media_1786697355672.png", "dreem-creme-caramel-2pack.png"),
    
    # 83-92: Maggi, Dreem Baking, Jelly, Chantilly, Heinz Mayo Jar, Harvest Foul, Knorr Potato, Cook's Vanilla, Dolphin Solid Tuna, El Maleka Penne 400g
    ("media_1786697398640.png", "maggi-chicken-stock-12cubes.png"),
    ("media_1786697402937.png", "dreem-baking-powder-sachet.png"),
    ("media_1786697407749.png", "dreem-strawberry-jelly-3pack.png"),
    ("media_1786697419515.png", "dreem-chantilly-cream-powder.png"),
    ("media_1786697470766.png", "heinz-mayo-jar-classic.png"),
    ("media_1786697475821.png", "harvest-foul-medames-plain-can.png"),
    ("media_1786697479707.png", "knorr-potato-seasoning-fareast.png"),
    ("media_1786697489662.png", "cooks-vanillin-with-sugar.png"),
    ("media_1786697493633.png", "dolphin-solid-tuna-200g.png"),
    ("media_1786697502601.png", "elmaleka-penne-pasta-400g.png"),
    
    # 93-102: Fern Ghee, Cook's Baking Powder, No 1 Tomato Paste, El Rashidi Halawa, Rehana Vinegar, El Maleka Vermicelli 1kg, El Doha Sugar 1kg, El Arosa Tea 40g, ISIS Anise, ISIS Hibiscus
    ("media_1786697514977.png", "fern-pure-butter-ghee-tin.png"),
    ("media_1786697540832.png", "cooks-baking-powder-sachet.png"),
    ("media_1786697544636.png", "number1-tomato-paste-jar-320g.png"),
    ("media_1786697549319.png", "elrashidi-mizan-halawa-plain.png"),
    ("media_1786697560989.png", "rehana-cane-vinegar-bottle.png"),
    ("media_1786697567699.png", "elmaleka-vermicelli-1kg.png"),
    ("media_1786697572577.png", "eldoha-fine-white-sugar-1kg.png"),
    ("media_1786697575974.png", "elarosa-tea-40g.png"),
    ("media_1786697582391.png", "isis-anise-tea-20bags.png"),
    ("media_1786697587433.png", "isis-hibiscus-tea-100bags.png"),
]

copied_count = 0
for src_name, dest_name in mapping:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copyfile(src_path, dest_path)
        copied_count += 1
    else:
        print(f"Warning: {src_name} not found!")

print(f"Successfully copied {copied_count} files to images/")
