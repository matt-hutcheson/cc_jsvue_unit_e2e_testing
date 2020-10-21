import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  }),

  it('should increase running total by correct amount when adding', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1')
    expect(wrapper.vm.runningTotal).to.equal(5)
  }),
  
  it('should reduce running total by correct amount when subtracting', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  }),

  it('should increase running total by correct amount when multiplying', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 5
    wrapper.vm.multiply('3')
    expect(wrapper.vm.runningTotal).to.equal(15)
  }),

  it('should reduce running total by correct amount when dividing', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  }),

  it('should display previous number concatenated with current number on number click', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 15
    wrapper.vm.newTotal = false
    wrapper.vm.numberClick(5)
    expect(wrapper.vm.runningTotal).to.equal(155)
  }),

  it('should be able to chain multiple operators', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 5
    wrapper.vm.add('5')
    wrapper.vm.operatorClick('=')
    wrapper.vm.subtract('2')
    wrapper.vm.operatorClick('=')
    wrapper.vm.multiply('2')
    wrapper.vm.operatorClick('=')
    wrapper.vm.divide('4')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(4)
  }),

  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 10
    wrapper.vm.previousTotal = 5
    wrapper.vm.previousOperator = '+'
    wrapper.vm.newTotal = false
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(5)
    expect(wrapper.vm.previousOperator).to.equal('+')
    expect(wrapper.vm.newTotal).to.equal(false)
  })
})
