import { describe, test, expect } from "vitest";
import NotificationComponent from "../NotificationComponent/NotificationComponent.vue"
import { mount } from "@vue/test-utils";

describe('NotificationComponent.vue', 
  () => { 
    test('verify the message in props', () => { 
      const wrapper = mount(NotificationComponent, {
        props: {
          message: "Olá mundo"
        }
      });

      expect(wrapper.text()).toContain("Olá mundo");
    });
  }
);
