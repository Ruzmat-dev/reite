const fs = require('fs')

const gazalari = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis suscipit accusamus quisquam obcaecati ab, delectus voluptatem accusantium. Voluptas iste dolorum dolorem libero nesciunt eius consequatur natus sequi eveniet ea culpa, illo explicabo laborum quae, quaerat officiis ut quam inventore facilis sapiente a. Laboriosam, perspiciatis ut. Maiores, accusantium quisquam eius eum quos possimus, repellat dignissimos asperiores dicta reprehenderit quas distinctio impedit veniam, voluptate exercitationem voluptatem. Facere modi obcaecati unde excepturi rerum accusantium soluta dolores ullam illo sint officia quae tempore aliquid corporis, quam eaque nostrum consequuntur ducimus minus hic autem id, impedit fuga magni! Facere, est magni reprehenderit alias nesciunt at earum adipisci! Maiores perferendis earum minima libero, repellat voluptatibus ab recusandae provident nulla, aut doloremque ipsa fuga reiciendis sunt eius temporibus. Harum nobis reprehenderit facere est? Hic laudantium aperiam repudiandae esse ad quis eius minima deleniti. Alias et, ullam, ducimus magni saepe provident suscipit explicabo eos deleniti itaque aspernatur.`

function fooro(folse) {
    console.log('bajarildi!');
    console.log(folse);
}

fs.writeFile("mazzi.js" , 'hello JS' , fooro )

function bar(error) {
    console.log('vazifa bajarildi!');
    console.log(error);
}

fs.rm('mazzi.js' , bar)

fs.writeFile("read.js" , "const fs = require('fs');", fooro )