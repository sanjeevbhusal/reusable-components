import Button from "../components/Button";
import { BsAirplane } from "react-icons/bs";

function ButtonPage() {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        <div>
          <Button className="random name"> Reserve</Button>
        </div>
        <div>
          <Button type="primary">Reserve</Button>
        </div>
        <div>
          <Button type="secondary">Reserve</Button>
        </div>
        <div>
          <Button type="success">Reserve</Button>
        </div>
        <div>
          <Button type="warning">Reserve</Button>
        </div>
        <div>
          <Button type="danger">Reserve</Button>
        </div>
      </div>
      <div>
        <div>
          <Button isRounded>Reserve</Button>
        </div>
        <div>
          <Button type="primary" isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="secondary" isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="success" isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="warning" isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="danger" isRounded>
            Reserve
          </Button>
        </div>
      </div>

      <div>
        <div>
          <Button hasOutline>
            <BsAirplane />
            Reserve
          </Button>
        </div>
        <div>
          <Button type="primary" hasOutline>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="secondary" hasOutline>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="success" hasOutline>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="warning" hasOutline>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="danger" hasOutline>
            Reserve
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button hasOutline isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="primary" hasOutline isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="secondary" hasOutline isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="success" hasOutline isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="warning" hasOutline isRounded>
            Reserve
          </Button>
        </div>
        <div>
          <Button type="danger" hasOutline isRounded>
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
