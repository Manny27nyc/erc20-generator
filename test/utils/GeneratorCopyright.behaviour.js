/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
function shouldBehaveLikeGeneratorCopyright (version) {
  describe('should have', function () {
    const _builtOn = {
      generator: 'https://vittominacori.github.io/erc20-generator',
    };

    it('a generator value', async function () {
      _builtOn.generator.should.be.equal(await this.instance.generator());
    });

    it('a version value', async function () {
      version.should.be.equal(await this.instance.version());
    });
  });
}

module.exports = {
  shouldBehaveLikeGeneratorCopyright,
};
