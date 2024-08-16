import { it, expect, describe, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import Currency from "@/pages/currency/[id].vue";

describe("Currency page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Currency, {
      global: {
        props: {
          id: 10
        }
      }
    });
  });

  it("should mount component", () => {
    //
  });
});
