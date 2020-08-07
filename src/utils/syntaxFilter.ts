import { Filter, ElementAttributes } from "interweave";

class LinkFilter extends Filter {
  attribute<K extends keyof ElementAttributes>(
    name: K,
    value: ElementAttributes[K]
  ): ElementAttributes[K] | undefined | null {
    console.log(name, value);
    return null;
  }

  node(name: string, node: HTMLElement): HTMLElement {
    if (name === "a") {
      node.setAttribute("target", "_blank");
    }

    return node;
  }
}

export const filter = new LinkFilter();
