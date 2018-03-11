let subject = require('/Users/sourabhsaha/Documents/courses/devops/TestGenerationWorkshop/TestGeneration/subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(NaN, undefined); } catch (e) {} 
try { subject.inc(NaN, NaN); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(8, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, NaN, "werw"); } catch (e) {} 
try { subject.weird(8, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(8, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(8, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, NaN, 41, "werw"); } catch (e) {} 
try { subject.weird(8, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(8, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(8, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, NaN, NaN, "werw"); } catch (e) {} 
try { subject.weird(8, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(8, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(NaN, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, "werw"); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, -1, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, "werw"); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, "werw"); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, "strict"); } catch (e) {} 
try { subject.weird(NaN, NaN, NaN, 'NEQ - strict'); } catch (e) {} 
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent true
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent true
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists true fileWithContent false
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
//pathExists false fileWithContent false
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('', '', ''); } catch (e) {} 
try { subject.blackListNumber('2121234567'); } catch (e) {} 
try { subject.blackListNumber('2131234567'); } catch (e) {} 
