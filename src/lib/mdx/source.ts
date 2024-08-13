import React from 'react';
import { createMDXSource } from '@fumadocs/content-collections';
import { allCourses, allMetas } from 'content-collections';
import { loader } from 'fumadocs-core/source';

const loaderOutput = loader({
  baseUrl: '/courses',
  source: createMDXSource(allCourses, allMetas),
});

const getPage = React.cache(loaderOutput.getPage);
const getPages = React.cache(loaderOutput.getPages);
const getLanguages = React.cache(loaderOutput.getLanguages);

const pageTree = loaderOutput.pageTree;
const files = loaderOutput.files;

export { getPage, getPages, getLanguages, pageTree, files };
