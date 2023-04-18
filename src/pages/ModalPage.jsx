import Button from "../components/Button";
import { useState } from "react";
import Model from "../components/Modal";

function ModalPage() {
  const [displayModal, setDisplayModal] = useState(false);

  function handleClick() {
    setDisplayModal(true);
  }

  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <div>
      <Button onClick={handleClick}>Show Model</Button>
      {displayModal && (
        <Model
          onClick={setDisplayModal}
          onClose={handleClose}
          actionBar={<Button onClick={handleClose}>Close Me</Button>}
        >
          Terms and Conditions
        </Model>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
        pariatur, consequuntur dolorem nostrum, nobis aut rem asperiores
        dolores, cum corrupti natus quas doloribus illo! Aliquid velit, corrupti
        dolorem voluptatum, ipsam magnam mollitia fugiat exercitationem illum
        eligendi nesciunt placeat, fuga dolor optio porro architecto! Nulla
        corporis sequi obcaecati! Nemo, enim.
      </p>
    </div>
  );
}

// absolute right-4 bottom-4 my-0

export default ModalPage;
