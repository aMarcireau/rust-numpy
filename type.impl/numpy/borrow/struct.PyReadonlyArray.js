(function() {var type_impls = {
"numpy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#240-273\">source</a><a href=\"#impl-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_array\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#253-256\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadonlyArray.html#tymethod.as_array\" class=\"fn\">as_array</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/type.ArrayView.html\" title=\"type ndarray::ArrayView\">ArrayView</a>&lt;'_, T, D&gt;</h4></section></summary><div class=\"docblock\"><p>Provides an immutable array view of the interior of the NumPy array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#260-263\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadonlyArray.html#tymethod.as_slice\" class=\"fn\">as_slice</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.slice.html\">[T]</a>, <a class=\"struct\" href=\"numpy/struct.NotContiguousError.html\" title=\"struct numpy::NotContiguousError\">NotContiguousError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Provide an immutable slice view of the interior of the NumPy array if it is contiguous.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#267-272\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadonlyArray.html#tymethod.get\" class=\"fn\">get</a>&lt;I&gt;(&amp;self, index: I) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;T</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"numpy/convert/trait.NpyIndex.html\" title=\"trait numpy::convert::NpyIndex\">NpyIndex</a>&lt;Dim = D&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Provide an immutable reference to an element of the NumPy array if the index is within bounds.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadonlyArray%3C'py,+N,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#276-331\">source</a><a href=\"#impl-PyReadonlyArray%3C'py,+N,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, N, D&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, N, D&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/scalar/trait.Scalar.html\" title=\"trait nalgebra::base::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_as_matrix\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#320-330\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadonlyArray.html#tymethod.try_as_matrix\" class=\"fn\">try_as_matrix</a>&lt;R, C, RStride, CStride&gt;(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/matrix_view/type.MatrixView.html\" title=\"type nalgebra::base::matrix_view::MatrixView\">MatrixView</a>&lt;'_, N, R, C, RStride, CStride&gt;&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    C: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    RStride: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    CStride: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,</div></h4></section></summary><div class=\"docblock\"><p>Try to convert this array into a <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/matrix_view/type.MatrixView.html\" title=\"type nalgebra::base::matrix_view::MatrixView\"><code>nalgebra::MatrixView</code></a> using the given shape and strides.</p>\n<p>Note that nalgebra’s types default to Fortan/column-major standard strides whereas NumPy creates C/row-major strides by default.\nFurthermore, array views created by slicing into existing arrays will often have non-standard strides.</p>\n<p>If you do not fully control the memory layout of a given array, e.g. at your API entry points,\nit can be useful to opt into nalgebra’s support for <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">dynamic strides</a>, for example</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>pyo3::py_run;\n<span class=\"kw\">use </span>numpy::{get_array_module, PyReadonlyArray2};\n<span class=\"kw\">use </span>nalgebra::{MatrixView, Const, Dyn};\n\n<span class=\"attr\">#[pyfunction]\n</span><span class=\"kw\">fn </span>sum_standard_layout&lt;<span class=\"lifetime\">'py</span>&gt;(py: Python&lt;<span class=\"lifetime\">'py</span>&gt;, array: PyReadonlyArray2&lt;<span class=\"lifetime\">'py</span>, f64&gt;) -&gt; <span class=\"prelude-ty\">Option</span>&lt;f64&gt; {\n    <span class=\"kw\">let </span>matrix: <span class=\"prelude-ty\">Option</span>&lt;MatrixView&lt;f64, Const&lt;<span class=\"number\">2</span>&gt;, Const&lt;<span class=\"number\">2</span>&gt;&gt;&gt; = array.try_as_matrix();\n    matrix.map(|matrix| matrix.sum())\n}\n\n<span class=\"attr\">#[pyfunction]\n</span><span class=\"kw\">fn </span>sum_dynamic_strides&lt;<span class=\"lifetime\">'py</span>&gt;(py: Python&lt;<span class=\"lifetime\">'py</span>&gt;, array: PyReadonlyArray2&lt;<span class=\"lifetime\">'py</span>, f64&gt;) -&gt; <span class=\"prelude-ty\">Option</span>&lt;f64&gt; {\n    <span class=\"kw\">let </span>matrix: <span class=\"prelude-ty\">Option</span>&lt;MatrixView&lt;f64, Const&lt;<span class=\"number\">2</span>&gt;, Const&lt;<span class=\"number\">2</span>&gt;, Dyn, Dyn&gt;&gt; = array.try_as_matrix();\n    matrix.map(|matrix| matrix.sum())\n}\n\nPython::with_gil(|py| {\n    <span class=\"kw\">let </span>np = py.eval(<span class=\"string\">\"__import__('numpy')\"</span>, <span class=\"prelude-val\">None</span>, <span class=\"prelude-val\">None</span>).unwrap();\n    <span class=\"kw\">let </span>sum_standard_layout = <span class=\"macro\">wrap_pyfunction!</span>(sum_standard_layout)(py).unwrap();\n    <span class=\"kw\">let </span>sum_dynamic_strides = <span class=\"macro\">wrap_pyfunction!</span>(sum_dynamic_strides)(py).unwrap();\n\n    <span class=\"macro\">py_run!</span>(py, np sum_standard_layout, <span class=\"string\">r\"assert sum_standard_layout(np.ones((2, 2), order='F')) == 4.\"</span>);\n    <span class=\"macro\">py_run!</span>(py, np sum_standard_layout, <span class=\"string\">r\"assert sum_standard_layout(np.ones((2, 2, 2))[:,:,0]) is None\"</span>);\n\n    <span class=\"macro\">py_run!</span>(py, np sum_dynamic_strides, <span class=\"string\">r\"assert sum_dynamic_strides(np.ones((2, 2), order='F')) == 4.\"</span>);\n    <span class=\"macro\">py_run!</span>(py, np sum_dynamic_strides, <span class=\"string\">r\"assert sum_dynamic_strides(np.ones((2, 2, 2))[:,:,0]) == 4.\"</span>);\n});</code></pre></div>\n</div></details></div></details>",0,"numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadonlyArray%3C'py,+N,+Dim%3C%5Busize;+1%5D%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#334-347\">source</a><a href=\"#impl-PyReadonlyArray%3C'py,+N,+Dim%3C%5Busize;+1%5D%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, N&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, N, <a class=\"type\" href=\"numpy/type.Ix1.html\" title=\"type numpy::Ix1\">Ix1</a>&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/scalar/trait.Scalar.html\" title=\"trait nalgebra::base::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_matrix\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#344-346\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadonlyArray.html#tymethod.as_matrix\" class=\"fn\">as_matrix</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixView.html\" title=\"type nalgebra::base::alias_view::DMatrixView\">DMatrixView</a>&lt;'_, N, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Convert this one-dimensional array into a <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixView.html\" title=\"type nalgebra::base::alias_view::DMatrixView\"><code>nalgebra::DMatrixView</code></a> using dynamic strides.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the array has negative strides.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadonlyArray1"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadonlyArray%3C'py,+N,+Dim%3C%5Busize;+2%5D%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#350-363\">source</a><a href=\"#impl-PyReadonlyArray%3C'py,+N,+Dim%3C%5Busize;+2%5D%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, N&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, N, <a class=\"type\" href=\"numpy/type.Ix2.html\" title=\"type numpy::Ix2\">Ix2</a>&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/scalar/trait.Scalar.html\" title=\"trait nalgebra::base::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_matrix\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#360-362\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadonlyArray.html#tymethod.as_matrix\" class=\"fn\">as_matrix</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixView.html\" title=\"type nalgebra::base::alias_view::DMatrixView\">DMatrixView</a>&lt;'_, N, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Convert this two-dimensional array into a <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixView.html\" title=\"type nalgebra::base::alias_view::DMatrixView\"><code>nalgebra::DMatrixView</code></a> using dynamic strides.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the array has negative strides.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadonlyArray2"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromPyObject%3C'py%3E-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#233-238\">source</a><a href=\"#impl-FromPyObject%3C'py%3E-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>, D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>&gt; FromPyObject&lt;'py&gt; for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract_bound\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#234-237\">source</a><a href=\"#method.extract_bound\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extract_bound</a>(obj: &amp;Bound&lt;'py, PyAny&gt;) -&gt; PyResult&lt;Self&gt;</h4></section></summary><div class='docblock'>Extracts <code>Self</code> from the bound smart pointer <code>obj</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract\" class=\"method trait-impl\"><a href=\"#method.extract\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extract</a>(ob: &amp;'py PyAny) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, PyErr&gt;</h4></section></summary><div class='docblock'>Extracts <code>Self</code> from the source GIL Ref <code>obj</code>. <a>Read more</a></div></details></div></details>","FromPyObject<'py>","numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#389-403\">source</a><a href=\"#impl-Debug-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#394-402\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#379-387\">source</a><a href=\"#impl-Drop-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#384-386\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#221-231\">source</a><a href=\"#impl-Deref-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = Bound&lt;'py, <a class=\"struct\" href=\"numpy/array/struct.PyArray.html\" title=\"struct numpy::array::PyArray\">PyArray</a>&lt;T, D&gt;&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#228-230\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#365-377\">source</a><a href=\"#impl-Clone-for-PyReadonlyArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#370-376\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","numpy::borrow::PyReadonlyArray0","numpy::borrow::PyReadonlyArray1","numpy::borrow::PyReadonlyArray2","numpy::borrow::PyReadonlyArray3","numpy::borrow::PyReadonlyArray4","numpy::borrow::PyReadonlyArray5","numpy::borrow::PyReadonlyArray6","numpy::borrow::PyReadonlyArrayDyn"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()